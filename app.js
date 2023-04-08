let input = prompt("コマンドを入力してください。 new, list, delete, quit のいずれかです。");
const todos = ['買い物', '掃除'];
while(input !== 'quit' && input !== 'q') {
  if(input === 'list') {
    console.log('**********');
    for(let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**********');
  } else if(input === 'new') {
    const newTodo = prompt('タスクを入力してください。');
    todos.push(newTodo);
    console.log(`${newTodo}を追加しました。`);
  } else if(input === 'delete') {
    const index = parseInt(prompt('削除したいタスクの番号を入力してください。'));
    if(!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`削除しました: ${deleted[0]}`);
    } else {
      console.log('不正な値です。');
    }
  }
  input = prompt("コマンドを入力してください。 new, list, delete, quit のいずれかです。");
}
console.log('OK, アプリを終了します。');
