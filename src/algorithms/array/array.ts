export const array = {};

// 55. Jump Game
function canJump(nums: number[]): boolean {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false;
        } else {
            max = Math.max(i + nums[i], max);
        }
    }
    return true;
}

function canJumpMy(nums: number[]): boolean {
    const zeros: Map<number, boolean> = new Map();
    for (let i = 0; i < nums.length; i++) {
        for (const [zeroI, can] of zeros) {
            if (!can) {
                return false;
            }
        }
        if (nums[i] === 0 && i !== nums.length - 1) {
            zeros.set(i, false);
            for (let j = 0; j < i; j++) {
                if (nums[j] > i - j) {
                    zeros.set(i, true);
                    break;
                }
            }
        }
    }
    return true;
}

function twoSum(nums: number[], target: number): number[] {
    const diffMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const first = diffMap.get(nums[i]);
        if (first !== undefined) {
            return [first, i];
        }
        diffMap.set(target - nums[i], i);
    }
    return [-1, -1];
}

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let ans = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[ans++] = nums[i];
        }
    }
    return ans;
}

function moveZeroesPlagiarized(nums: number[]): void {
    let id = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[id] = nums[i];
            id++;
        }
    }

    for (let i = id; i < nums.length; i++) {
        nums[i] = 0;
    }
}

function moveZeroes(nums: number[]): void {
    let id = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[id];
            nums[id] = nums[i];
            nums[i] = temp;
            id++;
        }
    }
}

// 303. Range Sum Query - Immutable
class NumArray {
    private _cache: Map<number, number> = new Map();

    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            const prev = this._cache.get(i - 1);
            if (prev !== undefined) {
                this._cache.set(i, i === 0 ? nums[0] : prev + nums[i]);
            }

        }
    }

    sumRange(left: number, right: number): number {
        const cachedRight = this._cache.get(right);
        const cachedLeftPrev = this._cache.get(left - 1);
        if (left > 0) {
            if (cachedRight !== undefined && cachedLeftPrev !== undefined) {
                return cachedRight - cachedLeftPrev;
            }
        } else {
            if (cachedRight !== undefined) {
                return cachedRight;
            }
        }
        return 0;
    }
}

// 304. Range Sum Query 2D - Immutable
class NumMatrixMy {
    private _cache: (number | undefined)[][] = [];

    constructor(matrix: number[][]) {

        for (let row = 0; row < matrix.length; row++) {
            const rowData: (number | undefined)[] = [];
            for (let col = 0; col < matrix[row].length; col++) {
                rowData.push(Infinity);
            }
            this._cache.push(rowData);
        }

        const subMatrixSum = (row: number, col: number) => {
            if (row > 0 && this._cache[row - 1][col] !== undefined) {
                let rowSum = 0;
                for (let i = 0; i <= col; i++) {
                    rowSum += matrix[row][i];
                }

                return (this._cache[row - 1][col] || 0) + rowSum;
            } else if (col > 0 && this._cache[row][col - 1] !== undefined) {
                let colSum = 0;
                for (let i = 0; i <= row; i++) {
                    colSum += matrix[i][col];
                }

                return (this._cache[row][col - 1] || 0) + colSum;
            }
        };

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === 0 && col === 0) {
                    this._cache[0][0] = matrix[0][0];
                } else {
                    this._cache[row][col] = subMatrixSum(row, col);
                }
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {

        let sum = 0;

        let t = this._cache[0][0] || 0;
        if (row2 > 0 && col2 > 0) {
            t = this._cache[row2][col2] || 0;
        }
        let x = 0;
        if (row1 > 0) {
            x = this._cache[row1 - 1][col2] || 0;
        }

        let y = 0;
        if (col1 > 0) {
            y = this._cache[row2][col1 - 1] || 0;
        }

        let z = this._cache[0][0] || 0;
        if (row1 > 0 && col1 > 0) {
            z = this._cache[row1 - 1][col1 - 1] || 0;
        }

        sum = t - x - y + z;

        return sum;
    }
}

class NumMatrix {
    private _cache: number[][] = [];

    constructor(matrix: number[][]) {
        const cLen = matrix.length + 1;
        const cache: number[][] = [];

        for (let row = 0; row < cLen; row++) {
            const rowSums = [];
            for (let col = 0; col < matrix[row === 0 ? 0 : row - 1].length + 1; col++) {
                rowSums.push(0);
            }
            cache.push(rowSums);
        }

        for (let row = 1; row < cLen; row++) {
            for (let col = 1; col < matrix[row - 1].length + 1; col++) {
                cache[row][col] = cache[row - 1][col]
                    + cache[row][col - 1]
                    - cache[row - 1][col - 1]
                    + matrix[row - 1][col - 1];
            }
        }

        this._cache = cache;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const {_cache: cache} = this;
        return cache[row2 + 1][col2 + 1]
            - cache[row2 + 1][col1]
            - cache[row1][col2 + 1]
            + cache[row1][col1];
    }
}

// 307. Range Sum Query - Mutable


//2180 ms
class NumArrayMyFirst {
    private readonly _nums: number[];
    private readonly _sums: number[];
    private _diffs: [number, number][] = [];

    constructor(nums: number[]) {
        this._nums = nums;
        this._sums = new Array(nums.length + 1).fill(0);

        let i = 1;
        while (i < this._nums.length + 1) {
            this._sums[i] = this._sums[i - 1] + this._nums[i - 1];
            i++;
        }
    }

    update(index: number, val: number): void {
        this._diffs.push([index, val - this._nums[index]]);
        this._nums[index] = val;
        // console.log(val)
        // console.log(this._diffs)
        // console.log(this._sums)

    }

    sumRange(left: number, right: number): number {

        let sum = 0;
        sum = this._sums[right + 1] - this._sums[left];
        for (let i = 0; i < this._diffs.length; i++) {
            if (this._diffs[i][0] <= right && this._diffs[i][0] >= left) {
                sum += this._diffs[i][1];
            }
        }
        return sum;
    }
}

// 5600 ms
class NumArrayMySecond {
    private readonly _nums: number[];
    private readonly _sums: number[];
    private _diffs: Map<number, number> = new Map();

    constructor(nums: number[]) {
        this._nums = nums;
        this._sums = new Array(nums.length + 1).fill(0);

        let i = 1;
        while (i < this._nums.length + 1) {
            this._sums[i] = this._sums[i - 1] + this._nums[i - 1];
            i++;
        }
    }

    update(index: number, val: number): void {
        const d = this._diffs.get(index);
        if (d === undefined) {
            this._diffs.set(index, val - this._nums[index]);
        } else {
            this._diffs.set(index, val - this._nums[index] + d);
        }

        this._nums[index] = val;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        sum = this._sums[right + 1] - this._sums[left];
        for (const [index, diff] of this._diffs) {
            if (index <= right && index >= left) {
                sum += diff;
            }
        }
        return sum;
    }
}

function spiralOrder(matrix: number[][]): number[] {
    const VISITED = Number.MIN_SAFE_INTEGER;
    let i = 0, j = 0;
    const ans = [matrix[0][0]];
    matrix[0][0] = VISITED;

    type Dir = 'up' | 'right' | 'down' | 'left';
    const moveFac = (dir: Dir) => {
        return () => {
            switch (dir) {
                case 'up':
                    i--;
                    break;
                case 'right':
                    j++;
                    break;
                case 'down':
                    i++;
                    break;
                case 'left':
                    j--;
                    break;
            }
            ans.push(matrix[i][j]);
            matrix[i][j] = VISITED;
        }
    }

    const canMoveFac = (dir: Dir): () => boolean => {
        let forward: number, row;
        switch (dir) {
            case 'up':
                row = matrix[i - 1];
                if (!row) return () => false;
                forward = row[j];
                break;
            case 'right':
                forward = matrix[i][j + 1];
                break;
            case 'down':
                row = matrix[i + 1];
                if (!row) return () => false;
                forward = row[j];
                break;
            case 'left':
                forward = matrix[i][j - 1];
                break;
        }
        return () => forward !== undefined && forward !== VISITED;
    }

    const turningFac = (dir: Dir) => {
        switch (dir) {
            case 'up':
                return () => new Navigator('right')
            case 'right':
                return () => new Navigator('down')
            case 'down':
                return () => new Navigator('left')
            case 'left':
                return () => new Navigator('up')
        }
    }

    class Navigator {
        canMove: () => boolean;
        move: () => void;
        turning: () => Navigator;

        constructor(dir: 'up' | 'right' | 'down' | 'left') {
            this.canMove = canMoveFac(dir);
            this.move = moveFac(dir);
            this.turning = turningFac(dir);
        }
    }

    let cur = new Navigator('right');

    while (cur.canMove() || cur.turning().canMove()) {
        if (cur.canMove()) {
            cur.move();
        } else if (cur.turning().canMove()) {
            cur = cur.turning();
        }
    }

    return ans;
}

// 56. Merge Intervals
export function mergeIntervals(intervals: number[][]): number[][] {
    const merged = [];
    const sorted = intervals.sort((a, b) => a[0] - b[0])

    for (const cur of sorted) {
        const last = merged[merged.length - 1];
        if (last && last[1] >= cur[0]) {
            last[1] = Math.max(cur[1], last[1]);
            continue;
        }
        merged.push(cur);
    }
    return merged
}

// (todo looks like O(n) ?)
export function mergeIntervalsBigON(intervals: number[][]): number[][] {
    const counts: { [key: number]: [number, number] } = {};
    let max = -1;

    for (const [start, end] of intervals) {
        if (!counts[start]) counts[start] = [1, 0];
        else counts[start][0]++;

        if (!counts[end]) counts[end] = [0, 1];
        else counts[end][1]++;

        max = Math.max(max, end);
    }

    const ans: number[][] = [], stack: number[] = [];
    let mergedStart = -1, i = 0;

    while (i <= max) {
        const countI = counts[i];
        if (countI) {
            let [startCount, endCount] = countI;

            while (startCount > 0) {
                if (stack.length === 0) {
                    mergedStart = i;
                }
                stack.push(1);
                startCount--;
            }

            while (endCount > 0) {
                const top = stack[stack.length - 1];
                if (top === 1) {
                    stack.pop();
                    if (stack.length === 0) {
                        ans.push([mergedStart, i]);
                        mergedStart = -1;
                    }
                }
                endCount--;
            }
        }
        i++;
    }

    return ans;
}

export function insertToIntervals(intervals: number[][], newInterval: number[]): number[][] {
    const front = [], tail = [], len = intervals.length;
    let i = 0;

    while (i < len) {
        const cur = intervals[i];
        const [ns, ne] = newInterval;
        if (cur[1] < ns) front.push(cur);
        else if (cur[1] >= ns && cur[0] <= ne) {
            newInterval[0] = Math.min(ns, cur[0]);
            newInterval[1] = Math.max(ne, cur[1]);
        } else tail.push(intervals[i]);
        i++;
    }

    front.push(newInterval);
    return front.concat(tail);
}
