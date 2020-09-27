const fetcher = async (...args) => {
  try {
    const res = await fetch(...args)
    const json = await res.json()
    return json
  } catch (e) {
    return null
  }
}

export default fetcher
