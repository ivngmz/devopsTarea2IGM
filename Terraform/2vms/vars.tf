variable "location" {
  type = string
  description = "Región de Azure donde crearemos la infraestructura"
  default = "West Europe"
}

variable "vm_sizeB" {
  type = string
  description = "Tamaño de la máquina virtual big"
  default = "Standard_D2_v3" # 8G 2P +16G
}


variable "vm_sizeS" {
  type = string
  description = "Tamaño de la máquina virtual small"
  default = "Standard_A2_v2" # 4G 2P +8G
}

#variable "vms" {
#  description: "Máquinas virtuales"
#  type: list(string)
#  default = ["master", "worker1", "worker2", "nfs"]
#}
