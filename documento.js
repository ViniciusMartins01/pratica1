const mysql = require(mysql.sql);
 
// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'escola'
});
 
// Método para gravar um aluno no banco de dados
const gravarAluno = (nome, email, id) => {
    const sql = 'INSERT INTO aluno (nome, email, id) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, id], (error, results) => {
        if (error) {
            console.error('Erro ao gravar aluno:', error);
            return;
        }
        console.log('Aluno gravado com sucesso:', results.insertId);
    });
};
 
// Método para buscar todos os alunos e imprimir no console
const buscarAlunos = () => {
    const sql = 'SELECT id, nome, email FROM aluno';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Erro ao buscar alunos:', error);
            return;
        }
        results.forEach(aluno => {
            console.log(`ID: ${aluno.id}, Nome: ${aluno.nome}, Email: ${aluno.email}`);
        });
    });
};
 
// Conexão com o banco de dados
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
 
    // Chamar os métodos para teste
    gravarAluno('Vinícius Martins', 'vinicius.martins@example.com');
    buscarAlunos();
 
    // Fechar a conexão
    connection.end();
});
