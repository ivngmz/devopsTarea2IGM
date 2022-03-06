terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>2.46.1"
    }
  }
}

# crea un service principal y rellena los siguientes datos para autenticar
provider "azurerm" {
  features {}
      subscription_id = "Completar"
      client_id = "Completar" # appID
      client_secret = "Completar" # password
      tenant_id = "Completar" # tenant
}
