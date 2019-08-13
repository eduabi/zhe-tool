module.exports = {
    /**
     * @description 数字类型数据算法集合
     */
    number: {
        /**
         * @description 获取15位以内的随机数
         * @param {Array} data 
         * @param {Boolean} reverse 
         * @template [15,55,24,88,17]
         */
        getRandomNum: function (digits) {
            let overrideStr = "1";
            for (let i = 0; i < digits.length; i++) {
                overrideStr += 0;
            }
            return parseInt(parseFloat(Math.random().toFixed(digits)) * Number(overrideStr));
        }
    },
    /**
     * @description 树结构数据操作算法集合
     */
    tree: {
        /**
         * @description 对象数组转换成多叉树
         * @param {*} data 对象数组
         * @param {*} parentId 根节点的parentId
         * @template [
         *  {
         *      "id": 0,
         *      "name": "root",
         *      "parentId": null
         *  },
         *   {
         *      "id": 1,
         *      "name": "中国",
         *      "parentId": 0
         *   },
         *   {
         *       "id": 2,
         *       "name": "陕西省",
         *       "parentId": 1
         *   }
         * ]
         */
        convertToTreeData: function (data, parentId) {
            const result = [];
            let temp = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].parentId === parentId) {
                    const node = {
                        id: data[i].id,
                        label: data[i].name,
                        parentId: data[i].parentId
                    }
                    temp = this.convertToTreeData(data, data[i].id)
                    if (temp.length > 0) {
                        node.children = temp
                    }
                    result.push(node)
                }
            }
            return result
        },
        /**
         * @description 多叉树转换成对象数组
         * @param {*} data 对象数组
         * @param {*} parentId 根节点的parentId
         * @template [{
         *      "id": 0,
         *      "name": "root",
         *      "parentId": null,
         *      "children": [{
         *          "id": 1,
         *          "label": "中国",
         *          "parentId": 0,
         *          "children": [{
         *              "id": 2,
         *              "label": "陕西省",
         *              "parentId": 1
         *           }]
         * 
         *       }]
         *  }]
         */
        convertTreeToFlatData: function (data, list) {
            for (let i = 0; i < data.length; i++) {
                let node = {
                    id: data[i].id,
                    label: data[i].label,
                    parentId: data[i].parentId
                };
                if (data[i].children) {
                    this.convertTreeToFlatData(data[i].children, list);
                }
                list.push(node);
            }
            return list;
        }
    },
    /**
     * @description 对象操作算法集合
     */
    object: {
        /**
         * @description 引用类型深拷贝
         * @param {*} data 对象/数组
         * @template [{
         *      "id": 0,
         *      "name": "root",
         *      "parentId": null,
         *      "children": [{
         *          "id": 1,
         *          "label": "中国",
         *          "parentId": 0,
         *          "children": [{
         *              "id": 2,
         *              "label": "陕西省",
         *              "parentId": 1
         *           }]
         * 
         *       }]
         *  }]
         */
        deepCopy: function (obj) {
            let newData = Array.isArray(obj) ? [] : {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        newData[key] = deepCopy(obj[key]);
                    } else {
                        newData[key] = obj[key];
                    }
                }
            }
            return newData;
        },
    },
    /**
     * @description 排序算法集合
     */
    sort: {
        /**
         * @description 插入排序
         * @param {Array} data 
         * @param {Boolean} reverse 
         * @template [15,55,24,88,17]
         */
        insertSort: function (data, reverse) {
            if (data.length < 2) {
                return data;
            }
            for (let i = 1; i < data.length; i++) {
                for (let j = i; j > 0; j--) {
                    if (data[j] < data[j - 1]) {
                        let temp = data[j - 1];
                        data[j - 1] = data[j];
                        data[j] = temp;
                    }
                }
            }
            return !reverse ? data : data.reverse();
        },
        /**
         * @description 冒泡排序
         * @param {Array} data 
         * @param {Boolean} reverse 
         * @template [15,55,24,88,17]
         */
        bubbleSort: function (data, reverse) {
            for (let i = 0; i < data.length - 1; i++) {
                for (let j = 0; j < data.length - i - 1; j++) {
                    let numSender = data[j];
                    if (!reverse && data[j] > data[j + 1]) {
                        data[j] = data[j + 1];
                        data[j + 1] = numSender;
                    } else if (reverse && data[j] < data[j + 1]) {
                        data[j] = data[j + 1];
                        data[j + 1] = numSender;
                    }
                }
            }
        },
        /**
         * @description 快速排序
         * @param {Array} data 
         * @param {Boolean} reverse 
         * @template [15,55,24,88,17]
         */
        quickSort: function (data, reverse) {
            if (data.length < 2) {
                return data;
            }
            let basicIndex = Math.floor(data.length / 2);
            let basicItem = data.splice(basicIndex, 1)[0];
            let left = [];
            let right = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i] < basicItem) {
                    left.push(data[i]);
                } else if (data[i] > basicItem) {
                    right.push(data[i]);
                }
            }
            if (reverse) {
                return quickSort(left).concat([basicItem], quickSort(right)).reverse();
            } else {
                return quickSort(left).concat([basicItem], quickSort(right));
            }
        }
    },
    /**
     * @description 数组操作算法集合
     */
    array: {
        /**
         * @description 数组去重
         * @param {Array} data 
         * @template [15,55,24,88,17]
         */
        removeDistinct: function (data) {
            let obj = {};
            let resArray = [];
            for (let item of data) {
                if (!obj[item]) {
                    resArray.push(item);
                    obj[item] = item;
                }
            }
            return resArray;
        }
    }
}




