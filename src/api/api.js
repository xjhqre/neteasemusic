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