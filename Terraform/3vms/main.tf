# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs
#   terraform {
#     required_providers {
#       azurerm = {
#         source  = "hashicorp/azurerm"
#         version = "~>2.46.1"
#       }
#     }
#   }
#   
#   # crea un service principal y rellena los siguientes datos para autenticar
#   		!!! Creo provider.tf para estos datos y añado a git ignore ¡¡¡
#   provider "azurerm" {
#     features {}
#         subscription_id = ""
#         client_id = "" # appID
#         client_secret = "" # password
#         tenant_id = "" # tenant
#   }

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group

resource "azurerm_resource_group" "rg" {
    name     =  "kubernetes_rg"
    location = var.location

    tags = {
        environment = "Tarea2"
    }

}

# Storage account
# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account

resource "azurerm_storage_account" "stAccount" {
    name                     = "staccountcpdounir" 
    resource_group_name      = azurerm_resource_group.rg.name
    location                 = azurerm_resource_group.rg.location
    account_tier             = "Standard"
    account_replication_type = "LRS"

    tags = {
        environment = "Tarea2"
    }

}
