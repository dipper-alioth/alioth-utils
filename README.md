# alioth-utils

### Installing

```bash
npm i alioth-utils
```

推荐使用

```bash
pnpm i alioth-utils
```

### Use

```ts
import {aBgLog} from 'alioth-utils'

aBgLog.primary('消息标题',消息内容)
aBgLog.primary('消息内容')
aBgLog.info('普通消息标题',消息内容)
aBgLog.info('普通消息内容')
aBgLog.error('错误消息标题',消息内容)
aBgLog.error('错误消息内容')
aBgLog.warning('警告消息标题',消息内容)
aBgLog.warning('警告消息内容')
aBgLog.success('成功消息标题',消息内容)
aBgLog.success('成功消息内容')
aBgLog.title('消息标题')
aBgLog.table('表格标题',T[])
aBgLog.image('图片标题',url)
```



