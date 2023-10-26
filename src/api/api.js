import {baseUrl} from "@/api/config";

export function topListDetail() {

    return new Promise(function (resolve, reject) {
        uni.request({
            url: `${baseUrl}/toplist/detail`,
            method: 'GET',
            success: res => {
                let result = res.data.list;
                result.length = 4
                resolve(result)
            }
        })
    })

}

/**
 * 获取歌单详情
 * @param id
 */
export function playlistDetail(id) {
    return uni.request({
        url: `${baseUrl}/playlist/detail?id=${id}`,
        method: 'GET'
    })
}

/**
 * 获取歌曲详情
 * @param id
 */
export function songDetail(id) {
    return uni.request({
        url: `${baseUrl}/song/detail?ids=${id}`,
        method: 'GET'
    })
}

/**
 * 获取相似歌曲
 * @param id
 */
export function simiSong(id) {
    return uni.request({
        url: `${baseUrl}/simi/song?id=${id}`,
        method: 'GET'
    })
}

/**
 * 获取歌曲评论
 * @param id
 */
export function commentMusic(id) {
    return uni.request({
        url: `${baseUrl}/comment/music?id=${id}`,
        method: 'GET'
    })
}

/**
 * 获取歌曲歌词
 * @param id
 */
export function lyric(id) {
    return uni.request({
        url: `${baseUrl}/lyric?id=${id}`,
        method: 'GET'
    })
}

/**
 * 获取音乐 url
 * @param id
 */
export function songUrl(id) {
    return uni.request({
        url: `${baseUrl}/song/url?id=${id}`,
        method: 'GET'
    })
}