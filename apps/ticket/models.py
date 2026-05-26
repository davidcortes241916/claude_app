from django.db import models

class Ticket(models.Model):
    titulo= models.CharField(max_length= 100)
    description= models.TextField(null=False, blank=False)
    class tipoStatus(models.TextChoices):
        abierto= 'abierto',
        cerrado= 'cerrado'

    status= models.CharField(max_length=50, choices=tipoStatus.choices, default=tipoStatus.abierto)
        
    class tipoPriority(models.TextChoices):
        baja= 'baja',
        media= 'media',
        alta= 'alta'
    
    priority= models.CharField(max_length=50, choices=tipoPriority.choices, default=tipoPriority.baja)