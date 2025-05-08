from django.db import models

class HistoryXY(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    result = models.FloatField()

    def __str__(self):
        return f"{self.x} ^ {self.y} = {self.result}"
    

