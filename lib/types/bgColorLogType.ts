/**
 *  日志类型枚举，定义不同级别的日志样式
 */
export type LogType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

/**
 * 美化背景日志打印接口
 *
 * 提供多层级日志输出能力，支持：
 * - 6种不同重要程度的日志类型（primary/success/warning/danger/info/default）
 * - 表格展示
 * - 图片展示
 * - 标题
 * 所有方法自动应用背景高亮和图标装饰样式
 */
export interface PrettyBgLog {
  /**
   * 打印主要信息
   *
   * @param titleOrContent - 当提供单个参数时作为内容直接输出，提供两个参数时作为标题
   * @param [content] - 可选内容参数，与标题参数配合使用
   *
   * @example
   * primary("系统启动") // Primary 系统启动
   * primary("初始化", "正在加载核心模块...") // 初始化 正在加载核心模块
   */
  primary: (titleOrContent: string, content?: string) => void
  /**
   * 打印普通信息（常规操作日志）
   *
   * @param {string} titleOrContent - 标题或内容参数
   * @param {string} [content] - 可选内容参数
   *
   * @example
   * info("用户登录") // Info 用户登录
   * info("用户登录", "用户名: admin") // 用户登录 用户名: admin
   */
  info: (titleOrContent: string, content?: string) => void
  /**
   * 打印错误信息（异常/错误提示）
   *
   * @param {string} titleOrContent - 错误标题或内容
   * @param {string} [content] - 错误详情（自动添加错误图标）
   *
   * @example
   * error("数据库连接失败") // Error 数据库连接失败
   * error("数据库连接失败", "连接超时: 3000ms") // 数据库连接失败 连接超时: 3000ms
   */
  error: (titleOrContent: string, content?: string) => void
  /**
   * 打印警告信息（潜在问题提示）
   *
   * @param {string} titleOrContent - 警告标题或内容
   * @param {string} [content] - 警告详情（自动添加警告图标）
   *
   * @example
   * warning("低内存警告") // Warning 低内存警告
   * warning("低内存警告", "剩余内存: 128MB") // 低内存警告 剩余内存: 128MB
   */
  warning: (titleOrContent: string, content?: string) => void

  /**
   * 打印成功信息（操作完成确认）
   *
   * @param {string} titleOrContent - 成功标题或内容
   * @param {string} [content] - 成功详情（自动添加成功图标）
   *
   * @example
   * success("文件保存成功) // Success 文件保存成功
   * success("文件保存成功", "路径: /docs/report.pdf") // 文件保存成功 路径: /docs/report.pdf
   */
  success: (titleOrContent: string, content?: string) => void
  /**
   * 打印标题
   *
   * @param {string} text - 标题文本
   *
   * @example
   * title("用户管理模块")  // 用户管理模块
   */
  title: (text: string) => void

  /**
   * 打印结构化表格
   *
   * @template T - 表格行数据类型
   * @param {string} title - 表格标题
   * @param {T[]} data - 表格数据数组
   *
   * @example
   * interface User {
   *    id: number
   *    name: string
   * }
   * const users: User[] = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
   * table('用户列表', users)
   */
  table: <T>(title: string, data: T[]) => void

  /**
   * 打印图片日志
   *
   * @param {string} title - 图片标题
   * @param {string} imageUrl - 图片地址（支持网络）
   *
   * @example
   * image("系统架构图", "https://mfiles.alphacoders.com/776/776351.jpg")
   */
  image: (title: string, imageUrl: string) => void
}
