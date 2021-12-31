export type IllustrationsProps<T = Record<string, unknown>> = T & {
  size: number
}

type Resize = (_: { height: number; size: number; width: number }) => {
  height: number
  width: number
}

export const resize: Resize = ({ height, size, width }) => {
  let newHeight = size

  let newWidth = size

  if (height > width) {
    newHeight = size

    newWidth = (size * width) / height
  } else if (height < width) {
    newHeight = (size * height) / width

    newWidth = size
  }

  return {
    height: newHeight,
    width: newWidth
  }
}
