const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function fetchList() {
  if (typeof NODE_ENV !== 'undefined' && NODE_ENV === 'development') {
    console.log('NODE_ENV测试 dev');
    await sleep(1000);
    const testData = (await import('./mock/list.json')).default;
    return testData;
  } else {
    console.log('NODE_ENV测试 prod');
    await sleep(1000);
    let data = [{ title: 'item1' }, { title: 'item2' }, { title: 'item3' }];
    return data;
  }
}
