module.exports = {
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
         * @description 冒泡排序算法
         * @param {Array} data 
         * @param {Boolean} reverse 
         * @template [15,55,24,88,17]
         */
        bubbleSort: function (data, reverse) {
            for (let i = 0; i < data.length - 1; i++) {
                for (let j = 0; j < data.length - i - 1; j++) {
                    if (!reverse && data[j] > data[j + 1]) {
                        let numSender = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = numSender;
                    } else if (!reverse && data[j] < data[j + 1]) {
                        let numSender = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = numSender;
                    }
                }
            }
        }
    }

}




