
const createJWT = async (payload) => {
    console.log(payload)
  try {
    const res = await fetch("/api/authe", {
        method: "POST",
        headers: {
            "context-type": "application/json",
        },
        body: JSON.stringify(payload)
    });
    console.log(res)
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default createJWT;
