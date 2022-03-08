import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    document.title = '标题';
    console.log('coming------');
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>标题</div>
    </div>
  );
}
