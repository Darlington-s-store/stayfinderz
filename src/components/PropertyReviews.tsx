
import React, { useState } from 'react';
import { Star, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface PropertyReviewsProps {
  propertyId: string;
  reviews?: Review[];
}

const PropertyReviews: React.FC<PropertyReviewsProps> = ({
  propertyId,
  reviews = []
}) => {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting your review",
        variant: "destructive",
      });
      return;
    }
    
    if (!newReview.trim()) {
      toast({
        title: "Review required",
        description: "Please write a review before submitting",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, you would submit to an API here
    setTimeout(() => {
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });
      setNewReview('');
      setRating(0);
      setIsSubmitting(false);
    }, 1000);
  };
  
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };
  
  const averageRating = calculateAverageRating();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Reviews ({reviews.length})
        </h3>
        
        {reviews.length > 0 && (
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={18}
                  className={star <= Math.round(averageRating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"}
                />
              ))}
            </div>
            <span className="font-medium">{averageRating.toFixed(1)}</span>
          </div>
        )}
      </div>
      
      {reviews.length === 0 ? (
        <div className="text-center py-8 bg-slate-50 rounded-lg">
          <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-medium">{review.user}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={14}
                      className={star <= review.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="border-t pt-6">
        <h4 className="font-medium mb-3">Write a Review</h4>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={24}
                  className={`cursor-pointer ${
                    star <= (hoverRating || rating)
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="review" className="block text-sm mb-1">Your Review</label>
            <Textarea
              id="review"
              placeholder="Share your experience with this property..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PropertyReviews;
