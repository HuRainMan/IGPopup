### igpopup

#### 安装
```bash
 npm i -S igpopup
```

#### 引用
```javascript
import { Popup } from 'igpopup';

// ...

components: {
    'ig-popup': Popup,
},
```

### usage
|props| value| default | effect|
|:-: |:-: |:-: | :-:|
|mask  |Boolean  | true |是否显示黑蒙层  |
|value  |Boolean |  false |控制popup显示隐藏  |
|type  |show/if  |  show  |popup显示隐藏的方式 v-show / v-if  |
|position  |popup的位置 | center  | left /top /right /bottom /center |
|styles  |Object  | {} |popup的样式  |

