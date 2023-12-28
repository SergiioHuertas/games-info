'use server'

export async function getGamesData(currentPage, itemsPerPage) {
    const res = await fetch(`https://api.rawg.io/api/games?key=01992a6477484d50b7cd6b211772e842&page_size=${itemsPerPage}&page=${currentPage}`)
    const data = await res.json()
    return data
}