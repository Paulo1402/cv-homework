const contactMeForm = document.getElementById("contactMeForm")
const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const messageInput = document.getElementById("messageInput")

// Adiciona um event listener para o evento "submit" do formulário
contactMeForm.addEventListener("submit", handleSubmit)

// Atualiza a URL toda vez que o valor de um input muda
nameInput.addEventListener("input", updateURL)
emailInput.addEventListener("input", updateURL)
messageInput.addEventListener("input", updateURL)

// Atualiza a URL com os valores dos inputs
function updateURL() {
  const params = new URLSearchParams()

  if (nameInput.value) {
    params.set("name", nameInput.value)
  }

  if (emailInput.value) {
    params.set("email", emailInput.value)
  }

  if (messageInput.value) {
    params.set("message", messageInput.value)
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, "", newUrl)
}

// Envia o formulário
function handleSubmit(event) {
  event.preventDefault()

  alert("Mensagem enviada!")

  nameInput.value = ""
  emailInput.value = ""
  messageInput.value = ""

  updateURL()
}
