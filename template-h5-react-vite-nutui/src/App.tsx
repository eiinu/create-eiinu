import { Button, Toast } from '@nutui/nutui-react'

function App() {
  const onClick = () => {
    Toast.show('成功')
  }
  return (
    <div className='demo'>
      <Button type='primary' onClick={onClick}>NutUI 按钮</Button>
    </div>
  )
}

export default App
