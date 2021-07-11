let token = `7f7b0ad4de6d85f2ed15e52e7a57734b0a0e7ee403ea8bf1`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-heroes-at.herokuapp.com/api/hero`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-heroes-at.herokuapp.com/api/hero`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://marvel-heroes-at.herokuapp.com/api/hero/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://marvel-heroes-at.herokuapp.com/api/hero/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}