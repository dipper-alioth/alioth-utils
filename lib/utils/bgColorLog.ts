import type { LogType, PrettyBgLog } from '../types/bgColorLogType'
/**
 * @description 判断传入的值是否为空
 * @param {any} value 传入的值
 * @return {boolean} 如果传入的值为null、undefined或空字符串，则返回true，否则返回false
 */
const isEmpty = (value: any): boolean => {
  return value == null || value === undefined || value === ''
}

/**
 * @description 返回颜色值
 * @param {string} type 日志类型 [ primary | success | warning | danger | info | default]
 * @returns {string} 颜色值
 */
function colorType(type: LogType = 'default'): string {
  let color = ''
  switch (type) {
    case 'primary':
      color = '#2d8cf0'
      break
    case 'success':
      color = '#19be6b'
      break
    case 'info':
      color = '#909399'
      break
    case 'warning':
      color = '#ff9900'
      break
    case 'danger':
      color = '#f03f14'
      break
    case 'default':
      color = '#35495E'
      break
    default:
      color = type
      break
  }
  return color
}

/**
 * @description 打印颜色日志
 * @param {string} title 日志标题
 * @param {string} text 日志内容
 * @param {ColorType} type 日志类型 [ primary | success | warning | danger | info | default]
 */
const printBackgroundColorLog = (title: string, text?: string, type?: LogType) => {
  /**
   * @description 使用console.log输出美化后的字符串
   * @param {string} title 日志标题
   * @param {string} text 日志内容
   * @param {ColorType} type 日志颜色类型
   */
  console.log(
    /**
     * @description 设置标题的样式
     */
    `%c ${title} %c ${text} %c`,
    /**
     * @description 设置标题的边框色、内边距、边框圆角、文字颜色
     */
    `background:${colorType(type)};border:2px solid ${colorType(
      type,
    )}; padding: 2px; border-radius: 3px 0 0 3px; color: #fff;`,
    /**
     * @description 设置文本的边框色、内边距、边框圆角、文字颜色
     */
    `border:2px solid ${colorType(type)}; padding: 2px; border-radius: 0 3px 3px 0; color: ${colorType(type)};`,
    /**
     * @description 设置背景色为透明
     */
    'background:transparent',
  )
}

/**
 * @description: 打印标题
 * @param {string} title 标题内容
 */
const titlePrint = (title: string) => {
  console.log(`%c ${title}`, 'font-size: 20px; font-weight: bold; color: #333;')
}

/**
 * @description: 打印表格
 * @param {string} title 表格标题
 * @param {any[]} data 表格数据
 */
const tablePrint = (title: string, data: any[]) => {
  // 打印标题
  console.groupCollapsed(title)
  // 打印表格
  console.table(data)
  console.groupEnd()
}

/**
 * @description: 打印图片
 * @param {string} title 图片标题
 * @param {string} url 图片地址
 * @param {number} scale 图片缩放比例
 */
const imagePrint = (title: string, url: string, scale: number = 1) => {
  // 创建一个新的Image对象
  const img = new Image()
  // 设置图片的跨域属性
  img.crossOrigin = 'anonymous'
  // 图片加载完成后执行的函数
  img.onload = () => {
    // 创建一个新的canvas元素
    const c = document.createElement('canvas')
    // 获取canvas的上下文
    const ctx = c.getContext('2d')
    // 如果上下文存在
    if (ctx) {
      // 设置canvas的宽度和高度为图片的宽度和高度
      c.width = img.width
      c.height = img.height
      // 在canvas上绘制图片
      ctx.drawImage(img, 0, 0)
      // 将canvas转换为dataUrl
      const dataUri = c.toDataURL('image/png')

      // 在控制台打印图片
      console.log(
        `%c ${title}`,
        `font-size: 1px;
             padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
             background-image: url(${dataUri});
             background-repeat: no-repeat;
             background-size: ${img.width * scale}px ${img.height * scale}px;
             color: transparent;
            `,
      )
    }
  }
  // 设置图片的src属性
  img.src = url
}

/**
 * @description 打印不同类型的日志信息
 */
const prettyBgLog = (): PrettyBgLog => {
  /**
   * @description 打印主要信息
   * @param {string} titleOrContent 日志标题或内容
   * @param {string} content 日志内容
   */
  const primary = (titleOrContent: string, content: string = '') => {
    const title = isEmpty(content) ? 'Primary' : titleOrContent
    const text = isEmpty(content) ? titleOrContent : content
    printBackgroundColorLog(title, text, 'primary')
  }

  /**
   * @description 打印普通信息
   * @param {string} titleOrContent 日志标题或内容
   * @param {string} content 日志内容
   */
  const info = (titleOrContent: string, content: string = '') => {
    const title = isEmpty(content) ? 'Info' : titleOrContent
    const text = isEmpty(content) ? titleOrContent : content
    printBackgroundColorLog(title, text, 'info')
  }

  /**
   * @description 打印错误信息
   * @param {string} titleOrContent 日志标题或内容
   * @param {string} content 日志内容
   */
  const error = (titleOrContent: string, content: string = '') => {
    const title = isEmpty(content) ? 'Error' : titleOrContent
    const text = isEmpty(content) ? titleOrContent : content
    printBackgroundColorLog(title, text, 'danger')
  }

  /**
   * @description 打印警告信息
   * @param {string} titleOrContent 日志标题或内容
   * @param {string} content 日志内容
   */
  const warning = (titleOrContent: string, content: string = '') => {
    const title = isEmpty(content) ? 'Warning' : titleOrContent
    const text = isEmpty(content) ? titleOrContent : content
    printBackgroundColorLog(title, text, 'warning')
  }

  /**
   * @description 打印成功信息
   * @param {string} titleOrContent 日志标题或内容
   * @param {string} content 日志内容
   */
  const success = (titleOrContent: string, content: string = '') => {
    const title = isEmpty(content) ? 'Success' : titleOrContent
    const text = isEmpty(content) ? titleOrContent : content
    printBackgroundColorLog(title, text, 'success')
  }

  /**
   * @description: 打印标题
   * @param {string} text 标题内容
   */
  const title = (text: string) => {
    titlePrint(text)
  }

  /**
   * @description 打印表格
   * @param {string} title 表格标题
   * @param {T[]} data 表格数据
   */
  const table = <T>(title: string, data: T[]) => {
    tablePrint(title, data)
  }

  /**
   * @description 打印图片
   * @param {string} title 图片标题
   */
  const image = (title: string, imageUrl: string) => {
    imagePrint(title, imageUrl)
  }

  return {
    primary,
    info,
    error,
    warning,
    success,
    title,
    table,
    image,
  }
}
export const aBgLog = prettyBgLog()
