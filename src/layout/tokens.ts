const color = {
  text: {
    intense: '#1C1C1C',
    quiet: '#595959',
  },
} as const;

const font = {
  base: 'Zilla Slab',
} as const;

const lineHeight = 1.5;
const space = [0, 4, 8, 12, 20, 32, 52] as const;

/**
 * A major third type scale
 * https://type-scale.com/?size=10&scale=1.250&text=A%20Visual%20Type%20Scale&font=Zilla%20Slab&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
 */
const typeScale = [10, 12.5, 15.63, 19.53, 24.41] as const;

export { color, font, lineHeight, space, typeScale };
