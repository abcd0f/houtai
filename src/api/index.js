// 导入axios
import md5 from 'js-md5';
import axios from 'axios';
import { ElMessage } from 'element-plus';

// axios.defaults.withCredentials = true; //跨域
axios.defaults.withCredentials = true;
//1. 创建新的axios实例，
const service = axios.create({
  baseURL: process.env.SERVERURL, // 公共接口
  timeout: 5000, // 超时时间
});

// 2.请求拦截器
service.interceptors.request.use(
  config => {
    const timestamp = new Date().getTime();
    // console.log(timestamp, 'timestamp');

    // const aa = { timestamp: timestamp };
    // console.log(aa, '519159151');

    const data = config.data;
    // console.log(data, 'aaaaaa');

    data['timestamp'] = timestamp;

    // console.log(data, 'kdfsajfidn');

    const sortKeys = Object.keys(data).sort(); // key排序

    // 按照key的顺序，重新生成新的object
    let sortKeyData = {};
    for (let key of sortKeys) {
      sortKeyData[key] = data[key];
    }

    const finishdata = Object.values(sortKeyData).join('|');

    const appKey = 'asdbgkasmaskmaskgmaskgmask123';

    // timestamp为手动拼接 应添加到sortKeys中进行排序

    const lastdata = finishdata + '|' + appKey;
    // console.log(lastdata, 'lastdata');

    const signature = md5(lastdata);
    // console.log(signature, 'signature');

    if (config.headers['X-SignatureType'] == 'md5 1') {
      config.data.set('signature', signature);
      config.data.set('timestamp', timestamp);
      return config;
    }
    //判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
    if (config.method === 'post') {
      config.data = {
        signature: signature,
        timestamp: timestamp,
        ...config.data,
      };
    } else if (config.method === 'get') {
      config.params = {
        signature: signature,
        timestamp: timestamp,
        ...config.params,
      };
    }

    config.headers = {
      'Authorization': 'Bearer',
      'X-ApiVersion': 'v1',
      'X-SignatureType': 'md5 1',
    };
    const token = localStorage.getItem('tokenkey'); // 获取登录时存储token
    if (token) {
      config.headers.Authorization = 'Bearer' + ' ' + token; // token携带在请求头中
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 3.响应拦截器
service.interceptors.response.use(
  response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    // if (response.data.code == 400) {
    //     ElMessage({
    //         message: response.data.data,
    //         type: 'warning',
    //     });
    //     // console.log(response.data)
    //     localStorage.removeItem('tokenkey');
    //     // 返回 401 清除 token 信息并跳转到登录页面
    //     window.location.href = '/NotFound';
    //     return Promise.reject(response.data.data);
    // }
    return response;
  },
  error => {
    // 接收到异常响应的处理开始
    if (error.response) {
      switch (error.response.status) {
        case 404:
          window.location.href = '/NotFound';
          break;
        case 500:
          ElMessage({
            message: error.response.data.data,
            type: 'error',
          });
          break;
        default:
          ElMessage({
            message: `连接错误${error.response.status}`,
            type: 'error',
          });
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        ElMessage({
          message: '服务器响应超时，请刷新当前页',
          type: 'error',
        });
      } else {
        ElMessage({
          message: '连接服务器失败',
          type: 'error',
        });
      }
    }

    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response.data);
  }
);
//4.导入文件
export default service;
