# pnpm构建单仓库多包结构(monorepo)

```js

    //pnpm-workspace.yaml  //用于定义包的目录
    packages:
    - "packages/*"

```

```js
    //子包之间可以相互引用
    //package.json
    {
        "dependencies": {
            "@tian/vue": "workspace:^1.0.0"
        }
    }
```
# 用pnpm构建的优点

### 如果我们用npm构建, 子包相互引用的依赖没有严格的限制，也就是说在 A包里使用的B包 ，但是在A包的package.json依赖里可以没有B包。
### 这样在子包分开使用的使用可能会造成依赖不完整的情况，只能在后期手动添加相应的依赖
