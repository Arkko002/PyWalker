from django import forms


class PageForm(forms.Form):
    # See models.py for max_length explanation
    url = forms.CharField(max_length=2048)
    follow_links = forms.BooleanField()

    def scrape_page(self):
        #TODO
        pass