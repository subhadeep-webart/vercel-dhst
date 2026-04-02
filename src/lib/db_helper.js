// ✅ Deep Merge Utility
export function deepMerge(target, source) {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        output[key] = key in target
          ? deepMerge(target[key], source[key])
          : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
