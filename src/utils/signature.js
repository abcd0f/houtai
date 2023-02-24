// signatureUtil.js
import md5 from 'js-md5';
export function signatureGenerate({ data }) {
    // 参数签名 密钥 + 时间戳 + header参数 + url

    // 密钥
    let appKey = 'asdbgkasmaskmaskgmaskgmask123';
    // 时间戳
    let timestamp = new Date().getTime();
    // token
    // post参数
    let dataStr = dataSerialize(dataSort(data));
    // 生成签名
    let aaa = dataStr + '.' + '|' + '.' + appKey;

    const signature = md5(aaa);

    return {
        signature,
        timestamp,
        appKey,
    };
}

// 参数排序
function dataSort(obj) {
    if (JSON.stringify(obj) == '{}' || obj == null) {
        return {};
    }
    let key = Object.keys(obj)?.sort();
    let newObj = {};
    for (let i = 0; i < key.length; i++) {
        newObj[key[i]] = obj[key[i]];
    }
    return newObj;
}

// 参数序列化
function dataSerialize(sortObj) {
    let strJoin = '';
    for (let key in sortObj) {
        strJoin += key + '=' + sortObj[key] + '&';
    }

    // return strJoin.substring(0, strJoin.length - 1)
    return strJoin;
}
