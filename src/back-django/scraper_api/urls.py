from django.urls import path

from scraper_api.views import PageView, PageListView

urlpatterns = [
    path("pages/", PageListView.as_view()),
    path("page/<int:page_id>", PageView.as_view())
]
