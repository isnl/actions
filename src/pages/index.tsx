import { useEffect, useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = '标题';
    console.log('coming------');
  }, []);
  return (
    <div className={styles.index}>
      <h1 className={styles.title}>标题-Github Actions自动部署</h1>
      <h2 onClick={() => setCount((val) => val + 1)}>{count}</h2>
    </div>
  );
}
