# Neutral Text Utility Classes

## Purpose
These utility classes provide neutral alternatives to the bright blue text (`text-[hsl(var(--icon-blue))]`) that was previously used throughout the application. The neutral classes maintain the design system's visual hierarchy without the vibrant blue color.

## Available Classes

### Text Utilities

#### `.text-neutral`
- **Color**: Gray text (`hsl(var(--text-gray))`)
- **Use case**: General text that needs to be neutral
- **Example**: `<span className="text-neutral">Descriptive text</span>`

#### `.text-neutral-dark`
- **Color**: Dark text (`hsl(var(--text-dark))`)
- **Use case**: Emphasized text with stronger contrast
- **Example**: `<h3 className="text-neutral-dark">Heading</h3>`

#### `.text-neutral-icon`
- **Color**: Navy blue (`hsl(var(--navy-blue))`)
- **Use case**: Icons or text that need subtle blue tone
- **Example**: `<Clock className="text-neutral-icon" />`

### Icon Utilities

#### `.icon-neutral`
- **Color**: Navy blue (`hsl(var(--navy-blue))`)
- **Use case**: Icons with professional navy tone instead of bright blue
- **Example**: `<Truck className="icon-neutral" />`

#### `.icon-neutral-muted`
- **Color**: Gray (`hsl(var(--text-gray))`)
- **Use case**: Secondary icons with muted appearance
- **Example**: `<CheckCircle className="icon-neutral-muted" />`

#### `.icon-neutral-light`
- **Color**: Gray with 70% opacity
- **Use case**: Very subtle icons in backgrounds or decorative elements
- **Example**: `<Car className="icon-neutral-light" />`

### Icon Container Utilities

#### `.icon-container-neutral`
- **Background**: Light gray (`hsl(var(--background-gray))`)
- **Color**: Dark text (`hsl(var(--text-dark))`)
- **Use case**: Icon wrapper with neutral gray background
- **Example**:
```jsx
<div className="icon-container-neutral rounded-full p-4">
  <Truck className="h-8 w-8" />
</div>
```

#### `.icon-container-neutral-accent`
- **Background**: Muted gray (`hsl(var(--muted))`)
- **Color**: Navy blue (`hsl(var(--navy-blue))`)
- **Use case**: Icon wrapper with subtle accent
- **Example**:
```jsx
<div className="icon-container-neutral-accent rounded-full p-4">
  <Clock className="h-8 w-8" />
</div>
```

## Migration Examples

### Before (Bright Blue)
```jsx
<Truck className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
```

### After (Neutral Navy)
```jsx
<Truck className="h-8 w-8 icon-neutral" />
```

### Before (Bright Blue Icon Container)
```jsx
<div className="bg-[hsl(var(--accent))] flex items-center justify-center">
  <Clock className="h-8 w-8 text-[hsl(var(--icon-blue))]" />
</div>
```

### After (Neutral Icon Container)
```jsx
<div className="icon-container-neutral-accent flex items-center justify-center">
  <Clock className="h-8 w-8" />
</div>
```

## Color Reference

| Class | Color | HSL Value | Hex Equivalent |
|-------|-------|-----------|----------------|
| `.text-neutral` | Text Gray | `hsl(215, 10%, 40%)` | ~#5C6B7A |
| `.text-neutral-dark` | Text Dark | `hsl(215, 25%, 17%)` | ~#222C3C |
| `.text-neutral-icon` | Navy Blue | `hsl(214, 38%, 28%)` | ~#2B4162 |
| `.icon-neutral` | Navy Blue | `hsl(214, 38%, 28%)` | ~#2B4162 |
| `.icon-neutral-muted` | Text Gray | `hsl(215, 10%, 40%)` | ~#5C6B7A |

## Design System Integration

These classes integrate seamlessly with the existing design system:
- Uses existing CSS custom properties from `globals.css`
- Maintains visual hierarchy with navy blue and grays
- Doesn't interfere with other color utilities (orange, white, etc.)
- Works with all existing component styles

## When to Use

**Use neutral classes when:**
- You want to avoid the bright blue (#3B82F6) appearance
- Icons need to feel more professional and subdued
- Text should be readable without drawing too much attention
- You're replacing `text-[hsl(var(--icon-blue))]` references

**Keep the original blue when:**
- You want to maintain accent colors in specific features
- Links that should stand out as clickable
- Primary action indicators
- Brand-specific blue highlights

## Implementation Notes

- These classes are additive and don't modify existing styles
- No existing components are affected unless explicitly updated
- All classes follow the design system's color variables
- Classes are mobile-responsive and work with dark mode (if implemented)
