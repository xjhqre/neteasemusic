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