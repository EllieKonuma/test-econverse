import { useEffect, useMemo, useState } from "react";

export default function useTypeIn() {
  const [text, setText] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      fetch(
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
      )
        .then((res) => res.json())
        .then((users) => setUsers(users))
        .catch((err) => setError(err));
    })();
  }, []);

  return {
    text,
    setText,
    users,
    error,
  };
}
