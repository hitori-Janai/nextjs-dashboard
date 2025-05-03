async function f() {
    console.log('开始执行异步函数 f...');
    return 1;
  }


f();
console.log('异步函数 f 已调用，但尚未完成。');


setTimeout(() => {
    console.log("异步任务完成"); // 1秒后执行
  }, 1000);
  console.log("同步代码继续执行"); // 立即打印（早于异步任务）