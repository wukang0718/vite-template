import { App } from '@vue/runtime-core'
import './index.scss'

import { 
    locale,
    ElCard,
    ElCalendar
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 设置 i18n
// build 报错
// locale(lang)

/**
 * element-plus 按需引用配置
 */
export default (app: App) => {
    app.config.globalProperties.$ELEMENT =  { size: 'small' }
    app.component(ElCard.name, ElCard);
    app.component(ElCalendar.name, ElCalendar);
}