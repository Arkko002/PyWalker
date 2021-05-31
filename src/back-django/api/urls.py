from django.urls import path

from .views import PageListView, PageView

urlpatterns = [
    path("pages/", PageListView.as_view()),
    path("page/", PageView.as_view()),
    path("page/<int:page_id>", PageView.as_view())
]
