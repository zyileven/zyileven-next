import CodeBlock from "@/common/CodeBlock";

export default async function TimePage() {

    return (
        <div className="m-[10px]">
            一个小实验
            <CodeBlock language="js" code={`// 3. 给定两个数组 A 和 B，找出数组 A 和数组 B共同的元素, 在A 中的下标(index)
// - 注意时间复杂度, 优化
/**
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @return {number[]}
 */
const findExistEleIndex = (arrA, arrB) => {
    const commonIndexes = [];
    const map = new Map();

    // Create a map of elements in arrB
    for (let i = 0; i < arrB.length; i++) {
        map.set(arrB[i], true);
    }

    console.log('map:', map);
    

    // Check each element in arrA
    for (let i = 0; i < arrA.length; i++) {
        if (map.has(arrA[i])) {
            commonIndexes.push(i);
        }
    }

    return commonIndexes;
    // return tmp;

};
// 用例
// 共同的元素是5和3, 在A中的下标是 [0, 1, 3]
const a = [5, 3, 1, 5, 4];
const b = [5, 3];
console.log("res2 = ", findExistEleIndex(a, b)); // [0, 1, 3]
`} />
            
        </div>
    );
}
