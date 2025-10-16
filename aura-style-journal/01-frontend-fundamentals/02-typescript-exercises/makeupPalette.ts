// --- Task 3: Complex Types (Creative Exercise: Makeup Palette Interface) ---

// This interface defines the shape for a makeup palette object.
export interface MakeupPalette {
  brand: string;
  shadeNames: string[];
  isCrueltyFree: boolean;
}

// Example object that follows the MakeupPalette interface
const myPalette: MakeupPalette = {
  brand: "Aura Beauty",
  shadeNames: ["Cosmic Dust", "Golden Hour", "Sunset Glow", "Deep Space"],
  isCrueltyFree: true,
};

console.log("--- Makeup Palette Object ---");
console.log(myPalette);
