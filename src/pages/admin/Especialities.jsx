import { Button, Table, Drawer, Form, Input } from "antd";
import { useGetEspecialities, useEditEspeciality, useCreateEspeciality,useDeleteEspeciality } from "../../hooks/especialitiesHook";
import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";

const Especialities = () => {
    const { api } = useContext(NotificationContext);
    const { data: especialidades, isError } = useGetEspecialities();
    const { mutate } = useEditEspeciality();
    const { mutate: criarEspecialidade } = useCreateEspeciality();
    const { mutate: deletarEspecialidade } = useDeleteEspeciality();



    useEffect(() => {
        if (isError) {
            api.error({
                message: "Aviso:",
                description: "Erro ao buscar registros",
            });
        }
    }, [isError]);

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm(); // Criação do form controlado 
    const [isEditing, setIsEditing] = useState(false); // Saber se está editando ou criando


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        form.resetFields(); // Limpa o formulário ao fechar
    };

    function adicionarEspecialidade(data) {

        criarEspecialidade(
            { especialidade_nome: data.especialidade_nome },
            {
                onSuccess: () => {
                    api.success({
                        message: "Sucesso!",
                        description: "Especialidade criada com sucesso.",
                    });
                    onClose();
                    form.resetFields();
                },
                onError: () => {
                    api.error({
                        message: "Erro!",
                        description: "Erro ao criar especialidade.",
                    });
                }
            }
        );


        form.resetFields(); // Limpa o formulário após submit
        onClose();
    }

    function editarEspecialidade(data) {
        mutate({
            nome: data.especialidade_nome,
            id: data.especialidade_id
        },

            {
                onSuccess: () => {
                    api.success({
                        message: "Sucesso!",
                        description: "Especialidade atualizada com sucesso.",
                    });
                }
            }

        )

        form.resetFields(); // Limpa o formulário após submit
        onClose();
    }





    return (
        <div>
            <div className="flex flex-row justify-between items-center px-2 py-4">
                <h1>Especialidades</h1>

                <Button
                    type="default"
                    onClick={() => {
                        form.resetFields();
                        setIsEditing(false); // modo criação
                        showDrawer();
                    }}
                >
                    Adicionar
                </Button>

                <Drawer
                    title={isEditing ? "Editar especialidade" : "Adicionar especialidade"}
                    closable={{ 'aria-label': 'Close Button' }}
                    onClose={onClose}
                    open={open}
                >
                    <Form
                        form={form} // Passando o form criado para ter acesso a função de limpar os campos
                        layout="vertical"
                        onFinish={isEditing ? editarEspecialidade : adicionarEspecialidade}
                    >
                        <Form.Item
                            label="Nome da especialidade"
                            name="especialidade_nome"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor preencha o campo antes de enviar',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="ID da especialidade"
                            name="especialidade_id"
                            className="hidden"
                            rules={[
                                {
                                    required: false,
                                    message: 'Por favor preencha o campo antes de enviar',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full"
                        >
                              {isEditing ? "Editar" : "Adicionar"}
                        </Button>
                    </Form>
                </Drawer>
            </div>

            <Table
                dataSource={especialidades}
                rowKey={"especialidade_id"}
                className="w-full border "
            >
                <Table.Column
                    key={"especialidade_id"}
                    dataIndex={"especialidade_id"}
                    title="ID"
                />
                <Table.Column
                    key={"especialidade_nome"}
                    dataIndex={"especialidade_nome"}
                    title="Nome"
                    className="w-full"
                />
                <Table.Column
                    title="Ações"
                    className="w-[100px] flex justify-center"
                    render={(_, render) => (
                        <div className="flex gap-3">
                            <Button
                                type="primary"
                                icon={<EditFilled />}
                                shape="circle"
                                onClick={() => {
                                    form.setFieldsValue({
                                        especialidade_nome: render.especialidade_nome,
                                        especialidade_id: render.especialidade_id,
                                    });
                                    setIsEditing(true); // modo edição
                                    showDrawer();
                                }}

                            />
                            <Button
                                type="primary"
                                icon={<DeleteOutlined />}
                                shape="circle"
                                onClick={() => deletarEspecialidade(render.especialidade_id)}
                            />
                        </div>
                    )}
                />
            </Table>
        </div>
    );
};

export default Especialities;