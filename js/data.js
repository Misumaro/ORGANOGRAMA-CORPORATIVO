const orgData = {
    id: "socios",
    title: "Sócios",
    theme: "theme-socios",
    isRoot: true,
    children: [
        {
            id: "conselho",
            title: "Conselho",
            subtitle: "LOREM IPSUM",
            theme: "theme-gerencia",
            children: [
                {
                    id: "gerente-projetos",
                    title: "Gerente de Projetos",
                    subtitle: "LOREM IPSUM",
                    theme: "theme-gerencia",
                    children: [
                        {
                            id: "qualidade",
                            title: "Qualidade e Riscos / Segurança / Compliance",
                            subtitle: "LOREM IPSUM",
                            theme: "theme-gerencia",
                            children: [
                                {
                                    id: "diretorias",
                                    isGroup: true, // Agrupa as diretorias horizontalmente
                                    children: [
                                        {
                                            id: "financeiro",
                                            title: "Adm. Financeiro",
                                            subtitle: "LOREM IPSUM",
                                            theme: "theme-operacao",
                                            expandable: true,
                                            children: [
                                                {
                                                    id: "suporte",
                                                    title: "Suporte Protheus",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-suporte"
                                                },
                                                {
                                                    id: "rh",
                                                    title: "RH-DP",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-dept"
                                                },
                                                {
                                                    id: "compras-patrimonio",
                                                    isColumn: true,
                                                    children: [
                                                        { id: "compras", title: "Compras", subtitle: "LOREM IPSUM", theme: "theme-dept" },
                                                        { id: "patrimonio", title: "Patrimônio", subtitle: "LOREM IPSUM", theme: "theme-dept" }
                                                    ]
                                                },
                                                {
                                                    id: "fin",
                                                    title: "Financeiro",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-dept"
                                                },
                                                {
                                                    id: "contabilidade",
                                                    title: "Contabilidade",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-dept"
                                                }
                                            ]
                                        },
                                        {
                                            id: "operacao",
                                            title: "Operação",
                                            subtitle: "LOREM IPSUM",
                                            theme: "theme-operacao",
                                            expandable: true,
                                            children: [
                                                {
                                                    id: "tic",
                                                    title: "LOREM IPSUM",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-cyan"
                                                },
                                                {
                                                    id: "gestao",
                                                    title: "LOREM IPSUM",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-cyan"
                                                },
                                                {
                                                    id: "regulatorio",
                                                    title: "LOREM IPSUM",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-cyan"
                                                },
                                                {
                                                    id: "operacoes-base",
                                                    title: "Operações",
                                                    theme: "theme-purple",
                                                    children: [
                                                        {
                                                            id: "logistica",
                                                            title: "LOREM IPSUM",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-red",
                                                            children: [
                                                                { id: "log-1", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "log-2", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "log-3", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "log-4", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" }
                                                            ]
                                                        },
                                                        {
                                                            id: "servicos",
                                                            title: "LOREM IPSUM",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-red",
                                                            children: [
                                                                { id: "serv-1", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "serv-2", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "serv-3", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" }
                                                            ]
                                                        },
                                                        {
                                                            id: "alimentacao",
                                                            title: "LOREM IPSUM",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-red",
                                                            children: [
                                                                { id: "alim-1", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "alim-2", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" }
                                                            ]
                                                        },
                                                        {
                                                            id: "engenharia",
                                                            title: "LOREM IPSUM",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-red",
                                                            children: [
                                                                { id: "eng-1", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" },
                                                                { id: "eng-2", title: "LOREM IPSUM", subtitle: "LOREM IPSUM", theme: "theme-red" }
                                                            ]
                                                        },
                                                        {
                                                            id: "outro",
                                                            title: "LOREM IPSUM",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-red"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: "comercial",
                                            title: "Comercial",
                                            subtitle: "LOREM IPSUM",
                                            theme: "theme-operacao",
                                            expandable: true,
                                            children: [
                                                {
                                                    id: "gestao-com",
                                                    title: "Gestão",
                                                    subtitle: "LOREM IPSUM",
                                                    theme: "theme-cyan",
                                                    children: [
                                                        {
                                                            id: "juridico",
                                                            title: "Jurídico",
                                                            subtitle: "LOREM IPSUM",
                                                            theme: "theme-cyan",
                                                            children: [
                                                                {
                                                                    id: "comercial-lic1",
                                                                    title: "Comercial/ Lic",
                                                                    subtitle: "LOREM IPSUM",
                                                                    theme: "theme-dept"
                                                                },
                                                                {
                                                                    id: "comercial-lic2",
                                                                    title: "Comercial/ Lic",
                                                                    subtitle: "LOREM IPSUM",
                                                                    theme: "theme-dept"
                                                                },
                                                                {
                                                                    id: "novos-negocios",
                                                                    title: "Novos Negócios",
                                                                    subtitle: "LOREM IPSUM",
                                                                    theme: "theme-dept"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
