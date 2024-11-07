import {dataFoods} from '../data/Foods'
import {dataCategories} from '../data/Categories'
import { dataProducts } from './Products'
import {dataChat} from './Chats'
export {
    dataFoods,dataCategories,dataProducts,dataChat
}

//1. export default
//Cách này xuất ra một đối tượng mặc định. 
//Khi bạn sử dụng export default, bạn có thể import 
//đối tượng này với bất kỳ tên nào mà bạn muốn:

//2.export const
// Cách này xuất ra một biến hoặc hằng số với tên cụ thể.
// Khi bạn sử dụng export const, 
//bạn phải import nó bằng đúng tên đã được export: