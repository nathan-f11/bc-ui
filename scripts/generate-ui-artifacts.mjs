#!/usr/bin/env node
/**
 * Generate index.ts exports, Storybook stories, and RTL tests for UI components.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UI_DIR = path.join(ROOT, "packages/ui/src/components/ui");
const STORIES_DIR = path.join(ROOT, "apps/storybook/stories");
const INDEX_FILE = path.join(ROOT, "packages/ui/src/index.ts");

const SKIP_UI = new Set(["toaster"]);

const CATEGORY = {
  Forms: [
    "label",
    "textarea",
    "checkbox",
    "radio-group",
    "switch",
    "select",
    "native-select",
    "input-otp",
    "input-group",
    "field",
    "form",
    "input",
    "combobox",
    "date-picker",
  ],
  Overlays: [
    "dialog",
    "alert-dialog",
    "sheet",
    "drawer",
    "popover",
    "tooltip",
    "dropdown-menu",
    "context-menu",
    "hover-card",
    "command",
  ],
  Navigation: [
    "tabs",
    "breadcrumb",
    "navigation-menu",
    "menubar",
    "pagination",
    "separator",
  ],
  Feedback: ["alert", "progress", "skeleton", "sonner", "toast", "spinner"],
  "Data Display": [
    "table",
    "data-table",
    "avatar",
    "accordion",
    "collapsible",
    "scroll-area",
    "empty",
    "item",
    "kbd",
    "badge",
    "card",
  ],
  Layout: ["aspect-ratio", "resizable", "sidebar", "direction"],
  Advanced: ["carousel", "chart", "calendar"],
  Primitives: [
    "button",
    "button-group",
    "toggle",
    "toggle-group",
    "slider",
  ],
};

const STORY_BODY = {
  accordion: `<Accordion type="single" collapsible className="w-[300px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
    </Accordion>`,
  "alert-dialog": `<AlertDialog>
      <AlertDialogTrigger asChild><Button variant="outline">Open</Button></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>`,
  alert: `<Alert><AlertTitle>Heads up!</AlertTitle><AlertDescription>Alert message.</AlertDescription></Alert>`,
  avatar: `<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>`,
  badge: `<Badge>Badge</Badge>`,
  breadcrumb: `<Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Page</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>`,
  button: `<Button>Button</Button>`,
  "button-group": `<ButtonGroup><Button>One</Button><Button>Two</Button></ButtonGroup>`,
  calendar: `<Calendar mode="single" className="rounded-md border" />`,
  card: `<Card className="w-[300px]"><CardHeader><CardTitle>Card</CardTitle><CardDescription>Description</CardDescription></CardHeader><CardContent>Content</CardContent></Card>`,
  carousel: `<Carousel className="w-full max-w-xs"><CarouselContent><CarouselItem>1</CarouselItem><CarouselItem>2</CarouselItem></CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>`,
  chart: `<ChartContainer config={{ desktop: { label: "Desktop", color: "hsl(var(--chart-1))" } }} className="h-[200px] w-full"><BarChart data={[{ month: "Jan", desktop: 186 }]}><Bar dataKey="desktop" fill="var(--color-desktop)" /></BarChart></ChartContainer>`,
  checkbox: `<div className="flex items-center gap-2"><Checkbox id="c1" /><Label htmlFor="c1">Accept</Label></div>`,
  collapsible: `<Collapsible><CollapsibleTrigger asChild><Button variant="ghost">Toggle</Button></CollapsibleTrigger><CollapsibleContent>Hidden content</CollapsibleContent></Collapsible>`,
  combobox: `<Combobox />`,
  command: `<Command className="rounded-lg border shadow-md"><CommandInput placeholder="Search..." /><CommandList><CommandEmpty>No results.</CommandEmpty><CommandGroup><CommandItem>Item</CommandItem></CommandGroup></CommandList></Command>`,
  "context-menu": `<ContextMenu><ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">Right click</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Profile</ContextMenuItem></ContextMenuContent></ContextMenu>`,
  "data-table": `<DataTable />`,
  "date-picker": `<DatePicker />`,
  dialog: `<Dialog><DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Dialog</DialogTitle><DialogDescription>Dialog content.</DialogDescription></DialogHeader></DialogContent></Dialog>`,
  direction: `<DirectionProvider direction="ltr"><p dir="ltr">LTR content</p></DirectionProvider>`,
  drawer: `<Drawer><DrawerTrigger asChild><Button variant="outline">Open</Button></DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Drawer</DrawerTitle></DrawerHeader></DrawerContent></Drawer>`,
  "dropdown-menu": `<DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Menu</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Item</DropdownMenuItem></DropdownMenuContent></DropdownMenu>`,
  empty: `<Empty><EmptyTitle>No data</EmptyTitle><EmptyDescription>Nothing to show.</EmptyDescription></Empty>`,
  field: `<Field><FieldLabel>Name</FieldLabel><Input placeholder="Enter name" /></Field>`,
  form: `<div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" placeholder="email@example.com" /></div>`,
  "hover-card": `<HoverCard><HoverCardTrigger asChild><Button variant="link">Hover</Button></HoverCardTrigger><HoverCardContent>Details</HoverCardContent></HoverCard>`,
  input: `<Input placeholder="Type here" />`,
  "input-group": `<InputGroup><InputGroupInput placeholder="Search" /></InputGroup>`,
  "input-otp": `<InputOTP maxLength={6}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /></InputOTPGroup></InputOTP>`,
  item: `<Item><ItemTitle>Item title</ItemTitle><ItemDescription>Item description</ItemDescription></Item>`,
  kbd: `<Kbd>⌘ K</Kbd>`,
  label: `<Label htmlFor="name">Name</Label>`,
  menubar: `<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem></MenubarContent></MenubarMenu></Menubar>`,
  "native-select": `<NativeSelect><option value="">Select</option><option value="a">A</option></NativeSelect>`,
  "navigation-menu": `<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Item</NavigationMenuTrigger><NavigationMenuContent><div className="p-4">Content</div></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>`,
  pagination: `<Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#" /></PaginationItem><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#" /></PaginationItem></PaginationContent></Pagination>`,
  popover: `<Popover><PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger><PopoverContent>Popover content</PopoverContent></Popover>`,
  progress: `<Progress value={60} className="w-[200px]" />`,
  "radio-group": `<RadioGroup defaultValue="a"><div className="flex items-center gap-2"><RadioGroupItem value="a" id="a" /><Label htmlFor="a">A</Label></div></RadioGroup>`,
  resizable: `<ResizablePanelGroup direction="horizontal" className="min-h-[120px] max-w-md rounded-lg border"><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-2">A</div></ResizablePanel><ResizableHandle /><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-2">B</div></ResizablePanel></ResizablePanelGroup>`,
  "scroll-area": `<ScrollArea className="h-[100px] w-[200px] rounded-md border p-2"><div className="space-y-2">{Array.from({ length: 10 }).map((_, i) => <p key={i}>Line {i + 1}</p>)}</div></ScrollArea>`,
  select: `<Select><SelectTrigger className="w-[180px]"><SelectValue placeholder="Theme" /></SelectTrigger><SelectContent><SelectItem value="light">Light</SelectItem><SelectItem value="dark">Dark</SelectItem></SelectContent></Select>`,
  separator: `<div className="space-y-1"><p>Above</p><Separator /><p>Below</p></div>`,
  sheet: `<Sheet><SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Sheet</SheetTitle></SheetHeader></SheetContent></Sheet>`,
  sidebar: `<SidebarProvider><Sidebar><SidebarContent><SidebarGroup><SidebarGroupLabel>App</SidebarGroupLabel><SidebarGroupContent><SidebarMenu><SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><main className="p-4">Content</main></SidebarProvider>`,
  skeleton: `<Skeleton className="h-4 w-[200px]" />`,
  slider: `<Slider defaultValue={[50]} max={100} step={1} className="w-[200px]" />`,
  sonner: `<><Button onClick={() => sonnerToast("Event created")}>Show toast</Button><Toaster /></>`,
  spinner: `<Spinner />`,
  switch: `<div className="flex items-center gap-2"><Switch id="s1" /><Label htmlFor="s1">Airplane mode</Label></div>`,
  table: `<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Alice</TableCell></TableRow></TableBody></Table>`,
  tabs: `<Tabs defaultValue="a" className="w-[300px]"><TabsList><TabsTrigger value="a">Tab A</TabsTrigger><TabsTrigger value="b">Tab B</TabsTrigger></TabsList><TabsContent value="a">Content A</TabsContent></Tabs>`,
  textarea: `<Textarea placeholder="Type message" />`,
  toast: `<Button onClick={() => toast({ title: "Scheduled" })}>Show Toast</Button>`,
  toggle: `<Toggle aria-label="Toggle bold">B</Toggle>`,
  "toggle-group": `<ToggleGroup type="single"><ToggleGroupItem value="a">A</ToggleGroupItem><ToggleGroupItem value="b">B</ToggleGroupItem></ToggleGroup>`,
  tooltip: `<TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger><TooltipContent>Tooltip</TooltipContent></Tooltip></TooltipProvider>`,
  "aspect-ratio": `<AspectRatio ratio={16 / 9} className="bg-muted w-[200px]"><div className="flex h-full items-center justify-center text-sm">16:9</div></AspectRatio>`,
};

const EXTRA_IMPORTS = {
  accordion:
    "Accordion, AccordionContent, AccordionItem, AccordionTrigger",
  "alert-dialog":
    "AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button",
  alert: "Alert, AlertDescription, AlertTitle",
  avatar: "Avatar, AvatarFallback",
  badge: "Badge",
  breadcrumb:
    "Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator",
  button: "Button",
  "button-group": "Button, ButtonGroup",
  calendar: "Calendar",
  card: "Card, CardContent, CardDescription, CardHeader, CardTitle",
  carousel:
    "Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious",
  chart: "ChartContainer",
  checkbox: "Checkbox, Label",
  collapsible: "Button, Collapsible, CollapsibleContent, CollapsibleTrigger",
  combobox: "Combobox",
  command:
    "Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList",
  "context-menu":
    "ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger",
  "data-table": "DataTable",
  "date-picker": "DatePicker",
  dialog:
    "Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger",
  direction: "DirectionProvider",
  drawer:
    "Button, Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger",
  "dropdown-menu":
    "Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger",
  empty: "Empty, EmptyDescription, EmptyTitle",
  field: "Field, FieldLabel, Input",
  form: "Input, Label",
  "hover-card": "Button, HoverCard, HoverCardContent, HoverCardTrigger",
  input: "Input",
  "input-group": "InputGroup, InputGroupInput",
  "input-otp": "InputOTP, InputOTPGroup, InputOTPSlot",
  item: "Item, ItemDescription, ItemTitle",
  kbd: "Kbd",
  label: "Label",
  menubar:
    "Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger",
  "native-select": "NativeSelect",
  "navigation-menu":
    "NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger",
  pagination:
    "Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious",
  popover: "Button, Popover, PopoverContent, PopoverTrigger",
  progress: "Progress",
  "radio-group": "Label, RadioGroup, RadioGroupItem",
  resizable: "ResizableHandle, ResizablePanel, ResizablePanelGroup",
  "scroll-area": "ScrollArea",
  select:
    "Select, SelectContent, SelectItem, SelectTrigger, SelectValue",
  separator: "Separator",
  sheet:
    "Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger",
  sidebar:
    "Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider",
  skeleton: "Skeleton",
  slider: "Slider",
  sonner: "Button, Toaster",
  spinner: "Spinner",
  switch: "Label, Switch",
  table: "Table, TableBody, TableCell, TableHead, TableHeader, TableRow",
  tabs: "Tabs, TabsContent, TabsList, TabsTrigger",
  textarea: "Textarea",
  toast: "Button, toast",
  toggle: "Toggle",
  "toggle-group": "ToggleGroup, ToggleGroupItem",
  tooltip:
    "Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger",
  "aspect-ratio": "AspectRatio",
};

function pascalCase(name) {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function getCategory(name) {
  for (const [cat, items] of Object.entries(CATEGORY)) {
    if (items.includes(name)) return cat;
  }
  return "Components";
}

function listComponents() {
  return fs
    .readdirSync(UI_DIR)
    .filter((f) => f.endsWith(".tsx") && !SKIP_UI.has(f.replace(".tsx", "")))
    .map((f) => f.replace(".tsx", ""))
    .sort();
}

function generateIndex(components) {
  const lines = [
    `export * from "./types/components";`,
    `export { useToast, toast } from "./hooks/use-toast";`,
    `export { useIsMobile } from "./hooks/use-mobile";`,
  ];
  for (const name of components) {
    lines.push(`export * from "./components/ui/${name}";`);
  }
  fs.writeFileSync(INDEX_FILE, `${lines.join("\n")}\n`);
  console.log(`wrote ${INDEX_FILE} (${components.length} components)`);
}

function generateStory(name) {
  const title = `${getCategory(name)}/${pascalCase(name)}`;
  const imports = EXTRA_IMPORTS[name] ?? pascalCase(name);
  const body = STORY_BODY[name] ?? `<${pascalCase(name)} />`;
  const extraSonner = name === "sonner" ? `\nimport { toast as sonnerToast } from "sonner";\n` : "";
  const extraToast = "";
  const extraChart =
    name === "chart" ? `\nimport { Bar, BarChart } from "recharts";\n` : "";

  return `import type { Meta, StoryObj } from "@storybook/react";
${extraSonner}${extraToast}${extraChart}
import { ${imports} } from "@ray/ui";

const meta = {
  title: "${title}",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (${body}),
};
`;
}

function generateStoryTest(name) {
  const file = `${pascalCase(name)}.stories`;
  return `import { composeStories } from "@storybook/react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import * as stories from "./${file}";

const composed = composeStories(stories);

afterEach(() => {
  cleanup();
});

describe("${file}", () => {
  it("Default", () => {
    const { container } = render(<composed.Default />);
    expect(container.firstChild).toBeTruthy();
  });
});
`;
}

function main() {
  const components = listComponents();
  generateIndex(components);

  fs.mkdirSync(STORIES_DIR, { recursive: true });
  for (const name of components) {
    const storyName = `${pascalCase(name)}.stories.tsx`;
    const testName = `${pascalCase(name)}.stories.test.tsx`;
    fs.writeFileSync(path.join(STORIES_DIR, storyName), generateStory(name));
    fs.writeFileSync(path.join(STORIES_DIR, testName), generateStoryTest(name));
  }
  console.log(`wrote ${components.length} stories + tests`);
}

main();
