import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CommentTag = '#META' | '#LOVE' | '#HATE' | '#FUNFACT';

interface PokemonComment {
  id: number;
  text: string;
  tags: CommentTag[];
  createdAt: Date;
}

@Component({
  selector: 'app-comment-section',
  imports: [FormsModule],
  templateUrl: './comment-section.html',
  styleUrl: './comment-section.css',
})
export class CommentSection {
  commentText = '';

  availableTags: CommentTag[] = ['#META', '#LOVE', '#HATE', '#FUNFACT'];

  selectedCommentTags: CommentTag[] = [];
  selectedFilterTags: CommentTag[] = [];

  isTagMenuOpen = false;
  isFilterMenuOpen = false;

  comments: PokemonComment[] = [
    {
      id: 1,
      text: 'This Pokémon is very useful in competitive battles.',
      tags: ['#META'],
      createdAt: new Date(),
    },
    {
      id: 2,
      text: 'I really love this design.',
      tags: ['#LOVE'],
      createdAt: new Date(),
    },
    {
      id: 3,
      text: 'Fun fact: this form has a very unique visual identity.',
      tags: ['#FUNFACT'],
      createdAt: new Date(),
    },
  ];

  get filteredComments(): PokemonComment[] {
    if (this.selectedFilterTags.length === 0) {
      return this.comments;
    }

    return this.comments.filter((comment) =>
      this.selectedFilterTags.some((tag) => comment.tags.includes(tag))
    );
  }

  toggleTagMenu() {
    this.isTagMenuOpen = !this.isTagMenuOpen;
    this.isFilterMenuOpen = false;
  }

  toggleFilterMenu() {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
    this.isTagMenuOpen = false;
  }

  toggleCommentTag(tag: CommentTag) {
    const alreadySelected = this.selectedCommentTags.includes(tag);

    if (alreadySelected) {
      this.selectedCommentTags = this.selectedCommentTags.filter(
        (selectedTag) => selectedTag !== tag
      );

      return;
    }

    this.selectedCommentTags.push(tag);
  }

  toggleFilterTag(tag: CommentTag) {
    const alreadySelected = this.selectedFilterTags.includes(tag);

    if (alreadySelected) {
      this.selectedFilterTags = this.selectedFilterTags.filter(
        (selectedTag) => selectedTag !== tag
      );

      return;
    }

    this.selectedFilterTags.push(tag);
  }

  addComment() {
    const text = this.commentText.trim();

    if (!text) {
      return;
    }

    const newComment: PokemonComment = {
      id: Date.now(),
      text,
      tags: [...this.selectedCommentTags],
      createdAt: new Date(),
    };

    this.comments.unshift(newComment);

    this.commentText = '';
    this.selectedCommentTags = [];
    this.isTagMenuOpen = false;
  }

  isCommentTagSelected(tag: CommentTag): boolean {
    return this.selectedCommentTags.includes(tag);
  }

  isFilterTagSelected(tag: CommentTag): boolean {
    return this.selectedFilterTags.includes(tag);
  }
}