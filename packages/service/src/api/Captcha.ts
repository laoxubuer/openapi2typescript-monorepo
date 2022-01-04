// @ts-ignore
/* eslint-disable */
import request from '@/request';
import * as API from './typings';

/** 验证图片验证码是否正确 POST /api/v1/captcha/img/check.json */
export async function checkImgCaptcha(
  body: API.CheckImgCaptchaReq,
  options?: { [key: string]: any },
) {
  return request<API.ApiResCaptchaTokenVO>('/api/v1/captcha/img/check.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取图片验证码 POST /api/v1/captcha/img/get.json */
export async function getImageCaptcha(body: API.ImgCaptchaReq, options?: { [key: string]: any }) {
  return request<API.ApiResImgCaptchaDTO>('/api/v1/captcha/img/get.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
