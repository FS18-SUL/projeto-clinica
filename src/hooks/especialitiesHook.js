import { useQuery, useMutation,useQueryClient  } from "@tanstack/react-query"
import { API } from "../services";

export const useCreateEspeciality = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (dados) => {
             const response = await API.post("/especialidades", dados);
             return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["especialidades"] });
        }
    });
};

export const useGetEspecialities = () => {
    return useQuery({
        queryKey: ["especialidades"],
        queryFn: async () => {
            const request = await API.get("/especialidades");
            return request.data;
        }
    })
}

export const useEditEspeciality = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, nome }) => {
            const response = await API.put(`/especialidades/${id}`, {
                especialidade_nome: nome
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["especialidades"] });
        }
    });
};

export const useDeleteEspeciality = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id) => {
            const response = await API.delete(`/especialidades/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["especialidades"] });
        }
    });
};