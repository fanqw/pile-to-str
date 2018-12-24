# 目的

在交通项目中会经常使用到桩号，这些桩号通常是Number类型（例：12.23），但是展示时要求格式为字符串（例：K12+230）。因此，需要将数字转换为标准格式。

# 如何使用

### 1. 下载

```sh
$ npm install pile-to-str --save
```

### 2. 使用

```js
import pileToStr from 'pile-to-str'

const pile = 12.23

// 传入参数必须为Number类型，建议使用该方法转换时，先判断类型
if (typeof(pile) === 'number') {
    pileToStr(pile) // => K12+230
}
```
