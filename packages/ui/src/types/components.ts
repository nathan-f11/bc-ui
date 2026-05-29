/**
 * @source docs/traces/FEAT-f4db-react-ui-component.md
 * @spec docs/specs/FEAT-f4db-react-ui-component.spec.md
 */

export const BUTTON_VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ["default", "sm", "lg", "icon"] as const;

export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const BADGE_VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

export const BUTTON_REQUIRED_STORY_VARIANTS = [
  "default",
  "secondary",
  "destructive",
] as const satisfies readonly ButtonVariant[];

export const THEME_MODES = ["light", "dark"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];

export const UI_EXPORTS = ["Button", "Input", "Card", "Badge"] as const;

export type UiExportName = (typeof UI_EXPORTS)[number];
