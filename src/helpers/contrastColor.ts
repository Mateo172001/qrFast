import Color from "color";


export const contrastColor = (c: any): string => {
    const baseColor = Color(c);
    const hslValues = baseColor.hsl().array();
    const hue = hslValues[0]; // Mantenemos el tono (hue)
    const saturation = hslValues[1]; // Mantenemos la saturación (saturation)

    // Lógica para determinar el contraste óptimo:
    const luminance = hslValues[2];
    const targetLuminance = luminance > 50
        ? Math.max(luminance - 35, 10) // Oscurecemos más, pero no menos de 10
        : Math.min(luminance + 45, 90);

    return Color.hsl([hue, saturation, targetLuminance]).hex();
};