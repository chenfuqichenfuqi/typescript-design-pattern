import { Font } from "./Font";

type TFonts = "Heiti" | "Microsoft" | "Serif";

export class FontFactory {
  private static _fonts: Map<TFonts, Font> = new Map();

  public static getFont(fontName: TFonts): Font {
    if (!FontFactory._fonts.has(fontName))
      FontFactory._fonts.set(fontName, new Font(fontName));

    return FontFactory._fonts.get(fontName)!;
  }
}
