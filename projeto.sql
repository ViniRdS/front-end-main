/*
Aluno: Vinicius Rodrigues dos Santos

Professor, são essas tabelas que estou usando no banco aula2
*/

create table pessoa(
	id bigserial,
	nome CHARACTER(80),
	sobre_nome CHARACTER(80),
	cpf CHARACTER(30),
	PRIMARY KEY(id)
);

insert into pessoa(nome, sobre_nome,cpf)values('Cebolinha','Cebola','555.555.555-55');
insert into pessoa(nome, sobre_nome,cpf)values('Monica','Souza','111.111.111-11');
insert into pessoa(nome, sobre_nome,cpf)values('Magali','Nnsei','333.333.333-33');

create table usuario(
	id bigserial,
	nome CHARACTER(80),
	sobre_nome CHARACTER(80),
	cpf CHARACTER(30),
	dataNasc DATE,
	telefone CHARACTER(20),
	endereco CHARACTER(120),
	PRIMARY KEY(id)
);

insert into usuario(nome, sobre_nome,cpf,telefone,endereco)values('Mateus','Rodrigues','121.212.121-21','4002-8922','Rua aquela lá, Bairro esse mesmo');
insert into usuario(nome, sobre_nome,cpf,telefone,endereco)values('Oziel','Rodrigues','454.545.454-54','4002-1425','Rua aquela lá, Bairro esse mesmo');
insert into usuario(nome, sobre_nome,cpf,telefone,endereco)values('Arnaldo','Rodrigues','393.939.393-93','7541-8922','Rua aquela lá, Bairro esse mesmo');

create table fornecedor(
	id bigserial,
	nome CHARACTER(80),
	cnpj CHARACTER(30),
	telefone CHARACTER(20),
	endereco CHARACTER(120),
	PRIMARY KEY(id)
);

insert into fornecedor(nome,cnpj,telefone,endereco)values('Fornecedor 1','00.000.000/0000-00','4241-2241','Rua aquela lá, Bairro Centro');
insert into fornecedor(nome,cnpj,telefone,endereco)values('Fornecedor 2','00.000.000/0000-00','8569-3754','Rua aquela lá, Bairro Centro');
insert into fornecedor(nome,cnpj,telefone,endereco)values('Fornecedor 3','00.000.000/0000-00','1425-5567','Rua aquela lá, Bairro Centro');

select * from pessoa;
select * from usuario;
select * from fornecedor;